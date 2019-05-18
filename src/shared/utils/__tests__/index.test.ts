import { Utils } from "..";
import { BehaviorSubject } from "rxjs";

describe('Utils', () => {
    it('should extends or replace keys correctly', () => {
        const state = { one: { two: 1 }, three: true };
        expect(Utils.updateState(state, { three: false })).toEqual({ one: { two: 1 }, three: false });
        expect(Utils.updateState(state, { one: { two: 2 } })).toEqual({ one: { two: 2 }, three: true });
    });
    it('should correctly perform update subject', () => {
        const state = { one: { two: 1 }, three: true };
        const bs = new BehaviorSubject<typeof state>(state);
        Utils.pushNewStateToBehaviorState(bs, { three: false });
        expect(bs.getValue()).toEqual({ one: { two: 1 }, three: false });
        Utils.pushNewStateToBehaviorState(bs, { three: true });
        expect(bs.getValue()).toEqual({ one: { two: 1 }, three: true });
    });
})