import React from 'react';
import Card from '../components/Card';
import { PiChartLineUp, PiHammer } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const RealtimeManagementPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center">
            <PiChartLineUp className="mr-3 h-10 w-10 text-blue-600" />
            <h1 className="text-aws-font-color text-3xl font-bold">
              {t('realtimeManagement.title')}
            </h1>
          </div>
          <p className="text-aws-font-color/70 text-lg">
            {t('realtimeManagement.subtitle')}
          </p>
        </div>

        <Card className="py-16 text-center">
          <div className="mb-6">
            <PiHammer className="text-aws-font-color/40 mx-auto mb-4 h-16 w-16" />
            <h2 className="text-aws-font-color mb-4 text-2xl font-semibold">
              {t('common.underConstruction')}
            </h2>
            <p className="text-aws-font-color/70 text-lg">
              {t('realtimeManagement.constructionMessage')}
            </p>
          </div>

          <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
            <h3 className="text-aws-font-color mb-3 text-lg font-semibold">
              {t('realtimeManagement.plannedFeatures')}
            </h3>
            <ul className="text-aws-font-color/80 space-y-2 text-left">
              <li>{t('realtimeManagement.features.dashboards')}</li>
              <li>{t('realtimeManagement.features.monitoring')}</li>
              <li>{t('realtimeManagement.features.alerts')}</li>
              <li>{t('realtimeManagement.features.analytics')}</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RealtimeManagementPage;
