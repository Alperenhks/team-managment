import { useCallback, useState } from 'react';
import ReactFlow, { 
  Node, 
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useTeam } from '../context/TeamContext';
import { Box, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { diagramStyles } from '../styles/diagramStyles';

const DiagramPage = () => {
  const { teams, removeUser } = useTeam();
  const { t } = useLanguage();
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; nodeId: string; type: 'user' | 'team' } | null>(null);

  // Her ekip için ayrı hiyerarşik düzen oluşturmak için yazdım default değerdense bunu kullanmak dahaa doğru 
  const initialNodes: Node[] = teams.flatMap((team, teamIndex) => {
    const nodes: Node[] = [];
    const startX = 300 + teamIndex * 600; 
    const startY = 100;                   
    const userGap = 220;                  

    
    nodes.push({
      id: team.id,
      data: { label: team.name },
      position: { x: startX, y: startY },
      style: diagramStyles.teamNode
    });

    // Kullanıcı node'ları (altta yan yana daha nizami sıralamak için eklediğimiz bir fonksiyon bu )
    team.users.forEach((user, userIndex) => {
      const usersPerRow = 3;
      const rowIndex = Math.floor(userIndex / usersPerRow);
      const colIndex = userIndex % usersPerRow;
      
      const userX = startX - ((Math.min(team.users.length, usersPerRow) - 1) * userGap) / 2 + colIndex * userGap;
      const userY = startY + 150 + rowIndex * 100; 

      nodes.push({
        id: user.id,
        data: { label: `${user.name}\n${user.role}` },
        position: { x: userX, y: userY },
        style: diagramStyles.userNode
      });
    });

    return nodes;
  });

  const initialEdges: Edge[] = teams.flatMap(team =>
    team.users.map(user => ({
      id: `${team.id}-${user.id}`,
      source: team.id,
      target: user.id,
      type: 'smoothstep',
      style: { stroke: '#ddd', strokeWidth: 2 },
      animated: false
    }))
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  const onNodeContextMenu = (event: React.MouseEvent, node: Node) => {
    event.preventDefault();
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      nodeId: node.id,
      type: 'user'
    });
  };

  const handleClose = () => setContextMenu(null);

  const handleRemoveUser = () => {
    if (!contextMenu || contextMenu.type !== 'user') return;
    removeUser(contextMenu.nodeId);
    setNodes(nodes.filter(node => node.id !== contextMenu.nodeId));
    setEdges(edges.filter(edge => edge.target !== contextMenu.nodeId));
    handleClose();
  };

  // Düzeni yeniden organize et
  const reorganizeLayout = useCallback(() => {
    const newNodes = [...nodes];
    
    teams.forEach((team, teamIndex) => {
      const startX = 300 + teamIndex * 600;
      const startY = 100;
      const userGap = 220;

      // Ekip node'unu yerleştir
      const teamNode = newNodes.find(n => n.id === team.id);
      if (teamNode) {
        teamNode.position = { x: startX, y: startY };
      }

      // Kullanıcı node'larını yerleştir
      team.users.forEach((user, userIndex) => {
        const usersPerRow = 3;
        const rowIndex = Math.floor(userIndex / usersPerRow);
        const colIndex = userIndex % usersPerRow;
        
        const userX = startX - ((Math.min(team.users.length, usersPerRow) - 1) * userGap) / 2 + colIndex * userGap;
        const userY = startY + 150 + rowIndex * 100;

        const userNode = newNodes.find(n => n.id === user.id);
        if (userNode) {
          userNode.position = { x: userX, y: userY };
        }
      });
    });

    setNodes([...newNodes]);
  }, [nodes, teams]);

  return (
    <Box sx={diagramStyles.root}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeContextMenu={onNodeContextMenu}
        fitView
        minZoom={0.5}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Background color="#f8f9fa" gap={16} />
        <Controls showInteractive={false} />
        <Panel position="top-right">
          <Box sx={diagramStyles.panel}>
            <Tooltip title={t('diagram.autoArrange')}>
              <IconButton onClick={reorganizeLayout} size="small">
                <AutoFixHighIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Panel>
      </ReactFlow>
      <Menu
        open={!!contextMenu}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu ? { top: contextMenu.y, left: contextMenu.x } : undefined
        }
      >
        <MenuItem onClick={handleRemoveUser}>{t('users.remove')}</MenuItem>
      </Menu>
    </Box>
  );
};

export default DiagramPage; 