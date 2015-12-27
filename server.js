if (Meteor.isServer) {
  Spots = new Mongo.Collection("spots");

  Meteor.publish('SpotsAll', () => {
    var spots = Spots.find({});
    return spots;
  });
}
