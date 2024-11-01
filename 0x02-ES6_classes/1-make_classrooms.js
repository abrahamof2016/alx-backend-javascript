import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const room = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  const rooms = [room, room2, room3];
  return rooms;
}
