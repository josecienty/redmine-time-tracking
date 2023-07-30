import { FormattedMessage } from "react-intl";
import { Tooltip } from "react-tooltip";
import { TIssue } from "../../types/redmine";
import { formatHours } from "../../utils/date";

type PropTypes = {
  issue: TIssue;
};

const IssueInfoTooltip = ({ issue }: PropTypes) => {
  return (
    <Tooltip id={`tooltip-issue-${issue.id}`} place="right" className="z-10 opacity-100">
      <div className="relative max-w-[210px]">
        <table className="text-sm text-left text-gray-300">
          <caption className="text-mg font-semibold text-left mb-3">
            {issue.tracker.name} #{issue.id}
            <p className="mt-1 text-xs font-normal max-w-[180px] truncate">{issue.subject}</p>
          </caption>
          <tbody>
            <tr>
              <th className="pr-2 font-medium whitespace-nowrap">
                <FormattedMessage id="issues.info-tooltip.status" />:
              </th>
              <td>{issue.status.name}</td>
            </tr>
            <tr>
              <th className="pr-2 font-medium whitespace-nowrap">
                <FormattedMessage id="issues.info-tooltip.priority" />:
              </th>
              <td>{issue.priority.name}</td>
            </tr>
            {issue.assigned_to && (
              <tr>
                <th className="pr-2 font-medium whitespace-nowrap">
                  <FormattedMessage id="issues.info-tooltip.assignee" />:
                </th>
                <td>{issue.assigned_to.name}</td>
              </tr>
            )}
            {issue.estimated_hours && (
              <tr>
                <th className="pr-2 font-medium whitespace-nowrap">
                  <FormattedMessage id="issues.info-tooltip.estimated-time" />:
                </th>
                <td>{formatHours(issue.estimated_hours)} h</td>
              </tr>
            )}
            <tr>
              <th className="pr-2 font-medium whitespace-nowrap">
                <FormattedMessage id="issues.info-tooltip.spent-time" />:
              </th>
              <td>{formatHours(issue.spent_hours)} h</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="italic mt-5">
        <FormattedMessage id="issues.info-tooltip.open-in-redmine" />
      </p>
    </Tooltip>
  );
};

export default IssueInfoTooltip;
