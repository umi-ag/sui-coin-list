module coin_list::devnet_btc {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct DEVNET_BTC has drop {}

    fun init(witness: DEVNET_BTC, ctx: &mut TxContext)
    {
        let treasury_cap = coin::create_currency<DEVNET_BTC>(witness, 2, ctx);
        transfer::transfer(treasury_cap, tx_context::sender(ctx))
    }

    public entry fun mint(treasury_cap: &mut TreasuryCap<DEVNET_BTC>, amount: u64, ctx: &mut TxContext)
    {
        let coin = coin::mint<DEVNET_BTC>(treasury_cap, amount, ctx);
        transfer::transfer(coin, tx_context::sender(ctx));
    }

    public entry fun transfer(treasury_cap: TreasuryCap<DEVNET_BTC>, recipient: address)
    {
        transfer::transfer(treasury_cap, recipient);
    }

    #[test_only]
    public fun test_init(ctx: &mut TxContext)
    {
        init(DEVNET_BTC {}, ctx)
    }
}
