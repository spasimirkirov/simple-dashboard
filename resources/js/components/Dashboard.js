import React, {useEffect, useState} from 'react';
import * as Api from '../requests';

const Dashboard = (params) => {
    const [stateWidgets, setWidgets] = useState();

    const fetchWidgets = () => {
        Api.findAll().then((res) => {
            setWidgets(res.data);
        });
    }

    useEffect(fetchWidgets, []);
    return null;
}

export default Dashboard;
