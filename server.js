if (Meteor.isServer) {
  Spots = new Mongo.Collection('spots');

  Spots.before.insert((userId, doc) => {
    var url = `http://nominatim.openstreetmap.org/reverse?format=json&lat=${doc.position.latitude}&lon=${doc.position.longitude}`;
    var response = HTTP.call('GET', url);
    doc.address = response.data.address;
  });
}
