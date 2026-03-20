from ccxt.base.types import Entry


class ImplicitAPI:
    public_get_healthz = publicGetHealthz = Entry('healthz', 'public', 'GET', {'cost': 1})
    public_get_describe = publicGetDescribe = Entry('describe', 'public', 'GET', {'cost': 1})
    private_post_call = privatePostCall = Entry('call', 'private', 'POST', {'cost': 1})
