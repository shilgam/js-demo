import Page from './page';

class CustomReportUploadPage extends Page {
  async open() {
    return super.open('/admin/custom_reports/new');
  }
}

export default CustomReportUploadPage;
