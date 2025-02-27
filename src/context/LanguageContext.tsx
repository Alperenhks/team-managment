import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';
type TranslationKey = keyof typeof translations.tr;

const translations = {
  tr: {
    'app.title': 'Ekip Yönetimi',
    'teams.title': 'Ekip ve Kullanıcı Yönetimi',
    'teams.subtitle': 'Ekiplerinizi oluşturun ve kullanıcılarınızı yönetin',
    'teams.create': 'Yeni Ekip Oluştur',
    'teams.name': 'Ekip Adı',
    'teams.description': 'Açıklama',
    'teams.createTeam': 'Yeni Ekip Oluştur',
    'teams.teamName': 'Ekip Adı',
    'teams.teamDescription': 'Ekip Açıklaması',
    'teams.teamNamePlaceholder': 'Ekip adını girin',
    'teams.teamDescriptionPlaceholder': 'Ekip açıklamasını girin',
    'teams.teamsAndMembers': 'Ekipler ve Üyeler',
    'teams.noTeams': 'Henüz ekip bulunmuyor',
    'teams.removeTeam': 'Ekibi Sil',
    'teams.emptyState': 'Henüz ekip bulunmuyor',
    'teams.emptyStateDesc': 'Yeni bir ekip oluşturarak başlayın',

    'users.create': 'Yeni Kullanıcı Ekle',
    'users.name': 'Ad Soyad',
    'users.email': 'E-posta',
    'users.role': 'Rol',
    'users.team': 'Ekip',
    'users.remove': 'Kullanıcıyı Kaldır',
    'users.addUser': 'Kullanıcı Ekle',
    'users.selectTeam': 'Ekip Seç',
    'users.namePlaceholder': 'Ad soyad girin',
    'users.emailPlaceholder': 'E-posta girin',
    'users.rolePlaceholder': 'Rol girin',
    'users.noTeams': 'Önce bir ekip oluşturun',
    'users.removeUser': 'Kullanıcıyı Sil',

    'nav.teams': 'Ekipler',
    'nav.diagram': 'Diyagram',
    'nav.charts': 'Grafikler',

    'common.toggleLanguage': 'Dili Değiştir',
    'common.toggleTheme': 'Temayı Değiştir',
    'common.create': 'Oluştur',
    'common.add': 'Ekle',

    'dashboard.totalTeams': 'Toplam Ekip',
    'dashboard.totalMembers': 'Toplam Üye',
    'dashboard.avgTeamSize': 'Ortalama Ekip Boyutu',
    'dashboard.teamDistribution': 'Ekip Dağılımı',
    'dashboard.teamSizes': 'Ekip Büyüklükleri',
    'dashboard.activeTeams': 'Aktif Ekipler',
    'dashboard.newMembers': 'Yeni Üyeler',
    'dashboard.overview': 'Genel Bakış',
    'dashboard.recentActivity': 'Son Aktiviteler',
    'dashboard.membersByTeam': 'Ekiplere Göre Üyeler',
    'dashboard.noTeams': 'Henüz ekip bulunmuyor',
    'dashboard.noMembers': 'Henüz üye bulunmuyor',
    'dashboard.addFirstTeam': 'İlk ekibinizi oluşturun',
    'dashboard.members': 'üye',
    'dashboard.joinedTeam': 'ekibine katıldı',

    'diagram.title': 'Organizasyon Şeması',
    'diagram.noData': 'Görüntülenecek veri bulunmuyor',
    'diagram.zoomIn': 'Yakınlaştır',
    'diagram.zoomOut': 'Uzaklaştır',
    'diagram.fitView': 'Ekrana Sığdır',
    'diagram.autoArrange': 'Otomatik Düzenle',
  },
  en: {
    'app.title': 'Team Management',
    'teams.title': 'Team and User Management',
    'teams.subtitle': 'Create and manage your teams and users',
    'teams.create': 'Create New Team',
    'teams.name': 'Team Name',
    'teams.description': 'Description',
    'teams.createTeam': 'Create New Team',
    'teams.teamName': 'Team Name',
    'teams.teamDescription': 'Team Description',
    'teams.teamNamePlaceholder': 'Enter team name',
    'teams.teamDescriptionPlaceholder': 'Enter team description',
    'teams.teamsAndMembers': 'Teams and Members',
    'teams.noTeams': 'No teams yet',
    'teams.removeTeam': 'Remove Team',
    'teams.emptyState': 'No teams yet',
    'teams.emptyStateDesc': 'Start by creating a new team',

    'users.create': 'Add New User',
    'users.name': 'Full Name',
    'users.email': 'Email',
    'users.role': 'Role',
    'users.team': 'Team',
    'users.remove': 'Remove User',
    'users.addUser': 'Add User',
    'users.selectTeam': 'Select Team',
    'users.namePlaceholder': 'Enter full name',
    'users.emailPlaceholder': 'Enter email',
    'users.rolePlaceholder': 'Enter role',
    'users.noTeams': 'Create a team first',
    'users.removeUser': 'Remove User',

    'nav.teams': 'Teams',
    'nav.diagram': 'Diagram',
    'nav.charts': 'Charts',

    'common.toggleLanguage': 'Change Language',
    'common.toggleTheme': 'Toggle Theme',
    'common.create': 'Create',
    'common.add': 'Add',

    'dashboard.totalTeams': 'Total Teams',
    'dashboard.totalMembers': 'Total Members',
    'dashboard.avgTeamSize': 'Average Team Size',
    'dashboard.teamDistribution': 'Team Distribution',
    'dashboard.teamSizes': 'Team Sizes',
    'dashboard.activeTeams': 'Active Teams',
    'dashboard.newMembers': 'New Members',
    'dashboard.overview': 'Overview',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.membersByTeam': 'Members by Team',
    'dashboard.noTeams': 'No teams yet',
    'dashboard.noMembers': 'No members yet',
    'dashboard.addFirstTeam': 'Create your first team',
    'dashboard.members': 'members',
    'dashboard.joinedTeam': 'joined team',

    'diagram.title': 'Organization Chart',
    'diagram.noData': 'No data to display',
    'diagram.zoomIn': 'Zoom In',
    'diagram.zoomOut': 'Zoom Out',
    'diagram.fitView': 'Fit to Screen',
    'diagram.autoArrange': 'Auto Arrange'
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 