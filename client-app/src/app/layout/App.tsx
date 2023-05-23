import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Header, List } from "semantic-ui-react";
import { Activity } from "../models/activity";

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        //On compoenent load
        axios.get("http://localhost:50000/api/activities").then((response) => {
            //Get activities, and set activities state
            setActivities(response.data);
        });
    }, []);

    return (
        <div>
            <Header as="h2" icon="users" content="Reactivities" />
            <List>
                {activities.map((activity) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                ))}
            </List>
            <Button content="test"></Button>
        </div>
    );
}

export default App;
