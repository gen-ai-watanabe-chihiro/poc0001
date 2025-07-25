import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { PiChartLineUp, PiShareNetwork, PiGraduationCap } from 'react-icons/pi';
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
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center">
            <AwsIcon className="mr-3 h-10 w-10" />
            <h1 className="text-aws-font-color text-3xl font-bold">
              {t('dashboard.title')}
            </h1>
          </div>
          <p className="text-aws-font-color/70 text-lg">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dashboardMenus.map((menu) => (
            <div
              key={menu.id}
              className="border-aws-font-color/20 group cursor-pointer rounded-lg border p-5 shadow transition-shadow duration-200 hover:shadow-lg"
              onClick={() => handleMenuClick(menu.route)}>
              <div className="p-4 text-center">
                <div
                  className={`${menu.color} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl text-white transition-transform duration-200 group-hover:scale-110`}>
                  {menu.icon}
                </div>
                <h3 className="text-aws-font-color mb-2 text-xl font-semibold">
                  {menu.title}
                </h3>
                <p className="text-aws-font-color/70 mb-4 text-sm">
                  {menu.description}
                </p>
                <Button
                  className="group-hover:bg-aws-sky w-full transition-colors duration-200 group-hover:text-white"
                  outlined
                  onClick={() => handleMenuClick(menu.route)}>
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
