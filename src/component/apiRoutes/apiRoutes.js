    export const apiRoutes = {
        ROVER: {
            CREATE_ROVER: 'http://localhost:8090/roverMars/createRover',
            CHANGE_ROVER: 'http://localhost:8090/roverMars/changeRoverDirection',
            ANGLE_ROVER: 'http://localhost:8090/roverMars/getAngle',
        },
        MAP: {
            CREATE_MAP: 'http://localhost:8090/mapMars/createMap',
        },
        OBSTACLE : {
            CREATE_OBSTACLE: 'http://localhost:8090/mapMars/createObstacle',
            DELETE_OBSTACLE: 'http://localhost:8090/mapMars/deleteObstacle',
        }
    }