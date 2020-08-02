import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "../components/Loading";
// import { RoomConsumer } from "../context";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const { loading, sortedRoom, rooms } = value;

//                 if (loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         Hello From rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRoom} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }
