import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity : Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDetails({activity, cancelSelectActivity, openForm,deleteActivity}: Props){
    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='3'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                    <Button onClick={() => deleteActivity(activity.id)} basic color='red' content='Delete'/>
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
         </Card>
    )
}