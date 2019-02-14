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

const command = 'get';
const desc = 'Fetch the current value of the characteristic specified';
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

    client.getCharacteristics(args.aid, args.iid).subscribe(({ characteristics: [{ value }] }) => {
        console.log(value);
    }, e => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbWRzL2dldC5qcyJdLCJuYW1lcyI6WyJjb21tYW5kIiwiZGVzYyIsImJ1aWxkZXIiLCJhaWQiLCJhbGlhcyIsInJlcXVpcmVkIiwiaWlkIiwiaGFuZGxlciIsImFyZ3MiLCJjbGllbnQiLCJhZGRyZXNzIiwicG9ydCIsImdldENoYXJhY3RlcmlzdGljcyIsInN1YnNjcmliZSIsImNoYXJhY3RlcmlzdGljcyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImUiLCJlcnJvciIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsTUFBTUEsVUFBVSxLQUFoQjtBQUNBLE1BQU1DLE9BQU8seURBQWI7QUFDQSxNQUFNQyxVQUFVO0FBQ1pDLFNBQUs7QUFDREMsZUFBTyxHQUROO0FBRURDLGtCQUFVO0FBRlQsS0FETztBQUtaQyxTQUFLO0FBQ0RGLGVBQU8sR0FETjtBQUVEQyxrQkFBVTtBQUZUO0FBTE8sQ0FBaEI7O0FBV0EsU0FBU0UsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDbkIsVUFBTUMsU0FDRix3QkFDSUQsS0FBS0MsTUFEVCxFQUVJRCxLQUFLRSxPQUZULEVBR0lGLEtBQUtHLElBSFQsQ0FESjs7QUFPQUYsV0FDS0csa0JBREwsQ0FDd0JKLEtBQUtMLEdBRDdCLEVBQ2tDSyxLQUFLRixHQUR2QyxFQUVLTyxTQUZMLENBR1EsQ0FBQyxFQUFFQyxpQkFBaUIsQ0FBQyxFQUFFQyxLQUFGLEVBQUQsQ0FBbkIsRUFBRCxLQUFxQztBQUFFQyxnQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQW9CLEtBSG5FLEVBSVFHLEtBQUs7QUFDREYsZ0JBQVFHLEtBQVIsQ0FBY0QsQ0FBZDtBQUNBVCxlQUFPVyxLQUFQO0FBQ0gsS0FQVCxFQVFRLE1BQU07QUFDRlgsZUFBT1csS0FBUDtBQUNILEtBVlQ7QUFZSDs7UUFHR3BCLE8sR0FBQUEsTztRQUNBQyxJLEdBQUFBLEk7UUFDQUMsTyxHQUFBQSxPO1FBQ0FLLE8sR0FBQUEsTyIsImZpbGUiOiJnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgUHJvbXB0IGZyb20gJ3Byb21wdCc7XG5cbmltcG9ydCBIYXBDbGllbnQgZnJvbSAnaGFwLWNsaWVudCc7XG5cbmNvbnN0IGNvbW1hbmQgPSAnZ2V0JztcbmNvbnN0IGRlc2MgPSAnRmV0Y2ggdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNoYXJhY3RlcmlzdGljIHNwZWNpZmllZCdcbmNvbnN0IGJ1aWxkZXIgPSB7XG4gICAgYWlkOiB7XG4gICAgICAgIGFsaWFzOiAnYScsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBpaWQ6IHtcbiAgICAgICAgYWxpYXM6ICdpJyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZXIoYXJncykge1xuICAgIGNvbnN0IGNsaWVudCA9XG4gICAgICAgIG5ldyBIYXBDbGllbnQoXG4gICAgICAgICAgICBhcmdzLmNsaWVudCxcbiAgICAgICAgICAgIGFyZ3MuYWRkcmVzcyxcbiAgICAgICAgICAgIGFyZ3MucG9ydFxuICAgICAgICApO1xuXG4gICAgY2xpZW50XG4gICAgICAgIC5nZXRDaGFyYWN0ZXJpc3RpY3MoYXJncy5haWQsIGFyZ3MuaWlkKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHsgY2hhcmFjdGVyaXN0aWNzOiBbeyB2YWx1ZSB9XX0pID0+IHsgY29uc29sZS5sb2codmFsdWUpIH0sXG4gICAgICAgICAgICBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xufVxuXG5leHBvcnQge1xuICAgIGNvbW1hbmQsXG4gICAgZGVzYyxcbiAgICBidWlsZGVyLFxuICAgIGhhbmRsZXJcbn1cbiJdfQ==