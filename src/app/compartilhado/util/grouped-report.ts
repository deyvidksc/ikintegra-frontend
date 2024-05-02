import { ReportProviderUrl } from "../modelos/reportProviderUrl";

export class GroupedReports {
    groupedReports: ReportProviderUrl[] = [];
  
    // Restante do seu código...
  
    // Método onde você deseja agrupar os relatórios
    public groupReport(reportProviderUrls: ReportProviderUrl[]) {
      this.groupedReports = reportProviderUrls.reduce((groups: ReportProviderUrl[], report: ReportProviderUrl) => {
        const { providerName, baseURL } = report;
  
        const existingGroup = groups.find(group => group.providerName === providerName && group.baseURL === baseURL);
        if (!existingGroup) {
          console.log(report);
          groups.push(report);
        }
  
        return groups;
      }, []);
    }
  }