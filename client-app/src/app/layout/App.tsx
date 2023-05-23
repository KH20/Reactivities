import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, List } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";

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
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
                <List>
                    {activities.map((activity) => (
                        <List.Item key={activity.id}>
                            {activity.title}
                        </List.Item>
                    ))}
                </List>
            </Container>
        </Fragment>
    );
}

export default App;
