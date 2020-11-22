import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  DetailRow,
  Page,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { phaseData, taskData, resourceData } from "./datasource";
import { SampleBase } from "./sample-base";

export default class App extends SampleBase {
  constructor() {
    super(...arguments);
    this.secondChildGrid = {
      dataSource: resourceData,
      queryString: "ResourceId",
      columns: [
        {
          field: "Resource",
          headerText: "Resource",
          textAlign: "Cneter",
          width: 120,
        },
        { field: "JTD", headerText: "JTD", width: 120 },
        { field: "ETC", headerText: "ETC", width: 120 },
        { field: "Week1", headerText: "Week1", width: 120 },
        { field: "Week2", headerText: "Week2", width: 120 },
        { field: "Week3", headerText: "Week3", width: 120 },
        { field: "Week4", headerText: "Week4", width: 120 },
        { field: "Week5", headerText: "Week5", width: 120 },
        { field: "Week6", headerText: "Week6", width: 100 },
        { field: "Week7", headerText: "Week7", width: 100 },
      ],
    };
    this.childGrid = {
      dataSource: taskData,
      queryString: "PhaseId",
      columns: [
        {
          field: "TaskId",
          headerText: "Task",
          textAlign: "Center",
          width: 75,
        },
        { field: "Name", headerText: "Name", width: 100 },
        {
          field: "StartDate",
          headerText: "Start Date",
          format: { skeleton: "yMd", type: "date" },
          width: 120,
        },
        {
          field: "EndDate",
          headerText: "End Date",
          format: { skeleton: "yMd", type: "date" },
          width: 120,
        },
        { field: "BudgetsHrs", headerText: "Budgets Hrs", width: 120 },
        { field: "Labour", headerText: "Labour", width: 120 },
        { field: "Consultant", headerText: "Consultant", width: 120 },
        { field: "Expense", headerText: "Expense", width: 120 },
        {
          field: "Status",
          headerText: "Status",
          displayAsCheckBox: true,
          type: "boolean",
          width: 120,
        },
        { field: "BudgetsHrs", headerText: "Budgets Hrs", width: 120 },
        { field: "FeeType", headerText: "FeeType", width: 100 },
      ],
      childGrid: this.secondChildGrid,
    };
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            dataSource={phaseData}
            childGrid={this.childGrid}
            allowSorting={true}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="PhaseId"
                headerText="Phase"
                width="125"
                textAlign="Center"
              />
              <ColumnDirective field="Name" headerText="Name" width="125" />
              <ColumnDirective
                field="StartDate"
                headerText="Start Date"
                width="135"
                format={{ skeleton: "yMd", type: "date" }}
                textAlign="Center"
              />
              <ColumnDirective
                field="EndDate"
                headerText="End Date"
                width="135"
                format={{ skeleton: "yMd", type: "date" }}
                textAlign="Center"
              />
              <ColumnDirective
                field="BudgetsHrs"
                headerText="Budgets Hrs"
                width="135"
                textAlign="Center"
              />
              <ColumnDirective
                field="Labour"
                headerText="Labour"
                width="135"
                textAlign="Center"
              />
              <ColumnDirective
                field="Consultant"
                headerText="Consultant"
                width="135"
                textAlign="Center"
              />
              <ColumnDirective
                field="Expense"
                headerText="Expense"
                width="135"
                textAlign="Center"
              />
              <ColumnDirective
                field="Status"
                headerText="Status"
                width="135"
                displayAsCheckBox={true}
                type="boolean"
                textAlign="Center"
              />
              <ColumnDirective
                field="FeeType"
                headerText="Fee Type"
                width="135"
                textAlign="Center"
              />
            </ColumnsDirective>
            <Inject services={[DetailRow, Page, Sort]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}
