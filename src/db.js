const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/mongoose_basics',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { 'authSource': 'admin' },
    user: 'root',
    pass: 'example'
  }
);

const activitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  inUse: Boolean,
  created_at: {
    type: Date,
    default: Date.now
  }
  
});

const daySchema = mongoose.Schema({
  date: Date,
  activitesDone: [
    {
      activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
      }
    }
  ]
});

const Activity = mongoose.model('Activity', activitySchema);
const Day = mongoose.model('Day', daySchema);

const chess = new Activity ({
  _id: new mongoose.Types.ObjectId(),
  name: 'Chess',
});

chess.save(function(err) {
  if (err) throw err;

  console.log('Activity saved.');
});

const docs = Activity.find({}, '_id name', function(err, activity){
  if(err) return err;

  console.log(activity, activity._id, activity.name);
});
