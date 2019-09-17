import Page from './page';

class CustomReportPage extends Page {
  async open(jobId) {
    return super.open(`/reports/${jobId}`);
  }
}

export default CustomReportPage;
