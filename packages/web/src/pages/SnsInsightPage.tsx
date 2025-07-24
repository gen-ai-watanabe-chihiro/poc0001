import React from 'react';
import Card from '../components/Card';
import { PiShareNetwork, PiHammer } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const SnsInsightPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex-1 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <PiShareNetwork className="w-10 h-10 mr-3 text-green-600" />
            <h1 className="text-3xl font-bold text-aws-font-color">
              {t('snsInsight.title')}
            </h1>
          </div>
          <p className="text-aws-font-color/70 text-lg">
            {t('snsInsight.subtitle')}
          </p>
        </div>

        <Card className="text-center py-16">
          <div className="mb-6">
            <PiHammer className="w-16 h-16 mx-auto text-aws-font-color/40 mb-4" />
            <h2 className="text-2xl font-semibold text-aws-font-color mb-4">
              {t('common.underConstruction')}
            </h2>
            <p className="text-aws-font-color/70 text-lg">
              {t('snsInsight.constructionMessage')}
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-aws-font-color mb-3">
              {t('snsInsight.plannedFeatures')}
            </h3>
            <ul className="text-left space-y-2 text-aws-font-color/80">
              <li>{t('snsInsight.features.socialAnalytics')}</li>
              <li>{t('snsInsight.features.sentimentAnalysis')}</li>
              <li>{t('snsInsight.features.trendTracking')}</li>
              <li>{t('snsInsight.features.reportGeneration')}</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SnsInsightPage;