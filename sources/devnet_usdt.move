module coin_list::devnet_usdt {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct DEVNET_USDT has drop {}

    fun init(witness: DEVNET_USDT, ctx: &mut TxContext)
    {
        let treasury_cap = coin::create_currency<DEVNET_USDT>(witness, 2, ctx);
        transfer::transfer(treasury_cap, tx_context::sender(ctx))
    }

    public entry fun mint(treasury_cap: &mut TreasuryCap<DEVNET_USDT>, amount: u64, ctx: &mut TxContext)
    {
        let coin = coin::mint<DEVNET_USDT>(treasury_cap, amount, ctx);
        transfer::transfer(coin, tx_context::sender(ctx));
    }

    public entry fun transfer(treasury_cap: TreasuryCap<DEVNET_USDT>, recipient: address)
    {
        transfer::transfer(treasury_cap, recipient);
    }

    #[test_only]
    public fun test_init(ctx: &mut TxContext)
    {
        init(DEVNET_USDT {}, ctx)
    }
}
