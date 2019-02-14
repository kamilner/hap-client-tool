'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handler = exports.desc = exports.command = undefined;

var _rxjs = require('rxjs');

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _hapClient = require('hap-client');

var _hapClient2 = _interopRequireDefault(_hapClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const command = 'pair';
const desc = 'Attempt to connect to and pair with a HomeKit device';

function handler(args) {
    const client = new _hapClient2.default(args.client, args.address, args.port);

    client.pair(prompt('pin code')).concat(client.verifyPairing()).subscribe(() => {}, e => {
        console.error(e);
        client.close();
    }, () => {
        console.log('pairing complete');
        client.close();
    });
}

function prompt(...labels) {
    return _rxjs.Observable.create(subscriber => {
        _prompt2.default.start();
        _prompt2.default.get(labels, function (err, result) {
            if (err) subscriber.error(err);else {
                if (labels.length === 1) {
                    subscriber.next(result[labels[0]]);
                } else {
                    subscriber.next(result);
                }
                subscriber.complete();

                _prompt2.default.stop();
            }
        });
    });
}

exports.command = command;
exports.desc = desc;
exports.handler = handler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbWRzL3BhaXIuanMiXSwibmFtZXMiOlsiY29tbWFuZCIsImRlc2MiLCJoYW5kbGVyIiwiYXJncyIsImNsaWVudCIsImFkZHJlc3MiLCJwb3J0IiwicGFpciIsInByb21wdCIsImNvbmNhdCIsInZlcmlmeVBhaXJpbmciLCJzdWJzY3JpYmUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2xvc2UiLCJsb2ciLCJsYWJlbHMiLCJjcmVhdGUiLCJzdWJzY3JpYmVyIiwic3RhcnQiLCJnZXQiLCJlcnIiLCJyZXN1bHQiLCJsZW5ndGgiLCJuZXh0IiwiY29tcGxldGUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsVUFBVSxNQUFoQjtBQUNBLE1BQU1DLE9BQU8sc0RBQWI7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbkIsVUFBTUMsU0FDRix3QkFDSUQsS0FBS0MsTUFEVCxFQUVJRCxLQUFLRSxPQUZULEVBR0lGLEtBQUtHLElBSFQsQ0FESjs7QUFPQUYsV0FDS0csSUFETCxDQUVRQyxPQUFPLFVBQVAsQ0FGUixFQUlLQyxNQUpMLENBS1FMLE9BQ0NNLGFBREQsRUFMUixFQVFLQyxTQVJMLENBU1EsTUFBTSxDQUFHLENBVGpCLEVBVVFDLEtBQUs7QUFDREMsZ0JBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNBUixlQUFPVyxLQUFQO0FBQ0gsS0FiVCxFQWNRLE1BQU07QUFDRkYsZ0JBQVFHLEdBQVIsQ0FBWSxrQkFBWjtBQUNBWixlQUFPVyxLQUFQO0FBQ0gsS0FqQlQ7QUFtQkg7O0FBRUQsU0FBU1AsTUFBVCxDQUFnQixHQUFHUyxNQUFuQixFQUEyQjtBQUN2QixXQUFPLGlCQUNGQyxNQURFLENBRUNDLGNBQWM7QUFDVix5QkFBT0MsS0FBUDtBQUNBLHlCQUFPQyxHQUFQLENBQ0lKLE1BREosRUFFSSxVQUFVSyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDbkIsZ0JBQUlELEdBQUosRUFBU0gsV0FBV0wsS0FBWCxDQUFpQlEsR0FBakIsRUFBVCxLQUNLO0FBQ0Qsb0JBQUlMLE9BQU9PLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJMLCtCQUFXTSxJQUFYLENBQWdCRixPQUFPTixPQUFPLENBQVAsQ0FBUCxDQUFoQjtBQUNILGlCQUZELE1BR0s7QUFDREUsK0JBQVdNLElBQVgsQ0FBZ0JGLE1BQWhCO0FBQ0g7QUFDREosMkJBQVdPLFFBQVg7O0FBRUEsaUNBQU9DLElBQVA7QUFDSDtBQUNKLFNBZkw7QUFpQkgsS0FyQkYsQ0FBUDtBQXVCSDs7UUFHRzNCLE8sR0FBQUEsTztRQUNBQyxJLEdBQUFBLEk7UUFDQUMsTyxHQUFBQSxPIiwiZmlsZSI6InBhaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgUHJvbXB0IGZyb20gJ3Byb21wdCc7XG5cbmltcG9ydCBIYXBDbGllbnQgZnJvbSAnaGFwLWNsaWVudCc7XG5cbmNvbnN0IGNvbW1hbmQgPSAncGFpcic7XG5jb25zdCBkZXNjID0gJ0F0dGVtcHQgdG8gY29ubmVjdCB0byBhbmQgcGFpciB3aXRoIGEgSG9tZUtpdCBkZXZpY2UnXG5cbmZ1bmN0aW9uIGhhbmRsZXIoYXJncykge1xuICAgIGNvbnN0IGNsaWVudCA9XG4gICAgICAgIG5ldyBIYXBDbGllbnQoXG4gICAgICAgICAgICBhcmdzLmNsaWVudCxcbiAgICAgICAgICAgIGFyZ3MuYWRkcmVzcyxcbiAgICAgICAgICAgIGFyZ3MucG9ydFxuICAgICAgICApO1xuXG4gICAgY2xpZW50XG4gICAgICAgIC5wYWlyKFxuICAgICAgICAgICAgcHJvbXB0KCdwaW4gY29kZScpXG4gICAgICAgIClcbiAgICAgICAgLmNvbmNhdChcbiAgICAgICAgICAgIGNsaWVudFxuICAgICAgICAgICAgLnZlcmlmeVBhaXJpbmcoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7IH0sXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWlyaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHByb21wdCguLi5sYWJlbHMpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgICAgc3Vic2NyaWJlciA9PiB7XG4gICAgICAgICAgICAgICAgUHJvbXB0LnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgUHJvbXB0LmdldChcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHRbbGFiZWxzWzBdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbXB0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgY29tbWFuZCxcbiAgICBkZXNjLFxuICAgIGhhbmRsZXJcbn1cbiJdfQ==