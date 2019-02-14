'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handler = exports.builder = exports.desc = exports.command = undefined;

var _rxjs = require('rxjs');

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _hapClient = require('hap-client');

var _hapClient2 = _interopRequireDefault(_hapClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const command = 'set';
const desc = 'Set the value of the characteristic specified';
const builder = {
    aid: {
        alias: 'a',
        required: true
    },
    iid: {
        alias: 'i',
        required: true
    }
};

function handler(args) {
    const client = new _hapClient2.default(args.client, args.address, args.port);

    client.setCharacteristics({ aid: args.aid, iid: args.iid, value: args._[1] }).subscribe(() => {}, e => {
        console.error(e);
        client.close();
    }, () => {
        client.close();
    });
}

exports.command = command;
exports.desc = desc;
exports.builder = builder;
exports.handler = handler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbWRzL3NldC5qcyJdLCJuYW1lcyI6WyJjb21tYW5kIiwiZGVzYyIsImJ1aWxkZXIiLCJhaWQiLCJhbGlhcyIsInJlcXVpcmVkIiwiaWlkIiwiaGFuZGxlciIsImFyZ3MiLCJjbGllbnQiLCJhZGRyZXNzIiwicG9ydCIsInNldENoYXJhY3RlcmlzdGljcyIsInZhbHVlIiwiXyIsInN1YnNjcmliZSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLFVBQVUsS0FBaEI7QUFDQSxNQUFNQyxPQUFPLCtDQUFiO0FBQ0EsTUFBTUMsVUFBVTtBQUNaQyxTQUFLO0FBQ0RDLGVBQU8sR0FETjtBQUVEQyxrQkFBVTtBQUZULEtBRE87QUFLWkMsU0FBSztBQUNERixlQUFPLEdBRE47QUFFREMsa0JBQVU7QUFGVDtBQUxPLENBQWhCOztBQVdBLFNBQVNFLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFVBQU1DLFNBQ0Ysd0JBQ0lELEtBQUtDLE1BRFQsRUFFSUQsS0FBS0UsT0FGVCxFQUdJRixLQUFLRyxJQUhULENBREo7O0FBT0FGLFdBQ0tHLGtCQURMLENBQ3dCLEVBQUVULEtBQUtLLEtBQUtMLEdBQVosRUFBaUJHLEtBQUtFLEtBQUtGLEdBQTNCLEVBQWdDTyxPQUFPTCxLQUFLTSxDQUFMLENBQU8sQ0FBUCxDQUF2QyxFQUR4QixFQUVLQyxTQUZMLENBR1EsTUFBTSxDQUFHLENBSGpCLEVBSVFDLEtBQUs7QUFDREMsZ0JBQVFDLEtBQVIsQ0FBY0YsQ0FBZDtBQUNBUCxlQUFPVSxLQUFQO0FBQ0gsS0FQVCxFQVFRLE1BQU07QUFDRlYsZUFBT1UsS0FBUDtBQUNILEtBVlQ7QUFZSDs7UUFHR25CLE8sR0FBQUEsTztRQUNBQyxJLEdBQUFBLEk7UUFDQUMsTyxHQUFBQSxPO1FBQ0FLLE8sR0FBQUEsTyIsImZpbGUiOiJzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgUHJvbXB0IGZyb20gJ3Byb21wdCc7XG5cbmltcG9ydCBIYXBDbGllbnQgZnJvbSAnaGFwLWNsaWVudCc7XG5cbmNvbnN0IGNvbW1hbmQgPSAnc2V0JztcbmNvbnN0IGRlc2MgPSAnU2V0IHRoZSB2YWx1ZSBvZiB0aGUgY2hhcmFjdGVyaXN0aWMgc3BlY2lmaWVkJ1xuY29uc3QgYnVpbGRlciA9IHtcbiAgICBhaWQ6IHtcbiAgICAgICAgYWxpYXM6ICdhJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGlpZDoge1xuICAgICAgICBhbGlhczogJ2knLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlcihhcmdzKSB7XG4gICAgY29uc3QgY2xpZW50ID1cbiAgICAgICAgbmV3IEhhcENsaWVudChcbiAgICAgICAgICAgIGFyZ3MuY2xpZW50LFxuICAgICAgICAgICAgYXJncy5hZGRyZXNzLFxuICAgICAgICAgICAgYXJncy5wb3J0XG4gICAgICAgICk7XG5cbiAgICBjbGllbnRcbiAgICAgICAgLnNldENoYXJhY3RlcmlzdGljcyh7IGFpZDogYXJncy5haWQsIGlpZDogYXJncy5paWQsIHZhbHVlOiBhcmdzLl9bMV0gfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHsgfSxcbiAgICAgICAgICAgIGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG59XG5cbmV4cG9ydCB7XG4gICAgY29tbWFuZCxcbiAgICBkZXNjLFxuICAgIGJ1aWxkZXIsXG4gICAgaGFuZGxlclxufVxuIl19