import * as React from 'react';
import {Tooltip} from '../../src/components/Tooltip';

function createTooltip(direction) {
  return <Tooltip data-hook={`story-tooltip-${direction}`} placement={direction}
          content={<p>This is my tooltip</p>}>
            <span>Hover me for a tooltip!</span>
          </Tooltip>;
}

const tooltipDemo: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export class TooltipStory extends React.PureComponent {
  render() {
    return (
      <div style={tooltipDemo}>
        <h3>Right</h3>
        {createTooltip('right')}
        <h3>Left</h3>
        {createTooltip('left')}
        <h3>Top</h3>
        {createTooltip('top')}
        <h3>Bottom</h3>
        {createTooltip('bottom')}
      </div>
    );
  }
}
