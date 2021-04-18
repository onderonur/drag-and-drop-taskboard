import { Tooltip, TooltipProps } from 'antd';

type BaseTooltipProps = TooltipProps;

function BaseTooltip(props: BaseTooltipProps) {
  return <Tooltip mouseEnterDelay={1.5} {...props} />;
}

export default BaseTooltip;
