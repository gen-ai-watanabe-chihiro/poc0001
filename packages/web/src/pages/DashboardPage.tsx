import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import {
  PiChartLineUp,
  PiShareNetwork,
  PiGraduationCap,
} from 'react-icons/pi';
import AwsIcon from '../assets/aws.svg?react';
import { useTranslation } from 'react-i18next';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dashboardMenus = [
    {
      id: 'realtime-management',
      title: t('dashboard.realtimeManagement.title'),
      description: t('dashboard.realtimeManagement.description'),
      icon: <PiChartLineUp />,
      route: '/realtime-management',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      id: 'sns-insight',
      title: t('dashboard.snsInsight.title'),
      description: t('dashboard.snsInsight.description'),
      icon: <PiShareNetwork />,
      route: '/sns-insight',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      id: 'knowledge-inheritance',
      title: t('dashboard.knowledgeInheritance.title'),
      description: t('dashboard.knowledgeInheritance.description'),
      icon: <PiGraduationCap />,
      route: '/knowledge-inheritance',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
  ];

  const handleMenuClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex-1 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AwsIcon className="w-10 h-10 mr-3" />
            <h1 className="text-3xl font-bold text-aws-font-color">
              {t('dashboard.title')}
            </h1>
          </div>
          <p className="text-aws-font-color/70 text-lg">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardMenus.map((menu) => (
            <div
              key={menu.id}
              className="border-aws-font-color/20 rounded-lg border p-5 shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
              onClick={() => handleMenuClick(menu.route)}
            >
              <div className="text-center p-4">
                <div
                  className={`${menu.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl group-hover:scale-110 transition-transform duration-200`}
                >
                  {menu.icon}
                </div>
                <h3 className="text-xl font-semibold text-aws-font-color mb-2">
                  {menu.title}
                </h3>
                <p className="text-aws-font-color/70 text-sm mb-4">
                  {menu.description}
                </p>
                <Button
                  className="w-full group-hover:bg-aws-sky group-hover:text-white transition-colors duration-200"
                  outlined
                  onClick={() => handleMenuClick(menu.route)}
                >
                  {t('dashboard.openMenu')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-aws-font-color/50 text-sm">
            {t('dashboard.moreMenusComingSoon')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;