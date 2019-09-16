import Page from './page';

class CampDetailsPage extends Page {
  async open(campaignId) {
    return super.open(`/campaigns/${campaignId}`);
  }
}

export default CampDetailsPage;
