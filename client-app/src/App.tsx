import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button, Header, List } from "semantic-ui-react";

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        //On compoenent load
        axios.get("http://localhost:50000/api/activities").then((response) => {
            //Get activities, and set activities state
            console.log(response);
            setActivities(response.data);
        });
    }, []);

    return (
        <div>
            <Header as="h2" icon="users" content="Reactivities" />
            <List>
                {activities.map((activity: any) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                ))}
            </List>
            <Button content="test"></Button>
        </div>
    );
}

export default App;
