import React from 'react';
import { Card, Input } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/input/style';

export default props => (
    <Card>
        <Input onPressEnter={e => props.onCreate(e.target.value)} />
    </Card>
)