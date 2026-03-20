import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetHealthz(params?: {}): Promise<implicitReturnType>;
    publicGetDescribe(params?: {}): Promise<implicitReturnType>;
    privatePostCall(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
