/// <reference types="react" />
import * as React from 'react';
export declare function withStylable<CoreProps, ExtendedProps = {}>(Component: React.ComponentClass<CoreProps> | React.SFC<CoreProps>, stylesheet: RuntimeStylesheet, getState?: (p?: any, s?: any, c?: any) => StateMap, extendedDefaultProps?: object): React.ComponentClass<CoreProps & ExtendedProps> | React.SFC<CoreProps & ExtendedProps>;
