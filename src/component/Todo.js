import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Checkbox, Row, Col } from 'antd';
import 'antd/lib/card/style';
import 'antd/lib/checkbox/style';
import 'antd/lib/row/style';
import 'antd/lib/col/style';

export default props => (
    <Card>
        <Row>
            <Col span={1}>
                <Checkbox checked={props.todo.isCompleted}
                    onChange={e => {
                        const todo = props.todo;
                        todo.isCompleted = e.target.checked;
                        props.onChange(todo);
                    }} />
            </Col>
            <Col span={23}>{props.todo.title}</Col>
        </Row>
    </Card>
)
