module coin_list::devnet_eth {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};

    struct DEVNET_ETH has drop {}

    fun init(witness: DEVNET_ETH, ctx: &mut TxContext)
    {
        let treasury_cap = coin::create_currency<DEVNET_ETH>(witness, 6, ctx);
        transfer::transfer(treasury_cap, tx_context::sender(ctx))
    }

    public entry fun mint(treasury_cap: &mut TreasuryCap<DEVNET_ETH>, amount: u64, ctx: &mut TxContext)
    {
        let coin = coin::mint<DEVNET_ETH>(treasury_cap, amount, ctx);
        transfer::transfer(coin, tx_context::sender(ctx));
    }

    public entry fun transfer(treasury_cap: TreasuryCap<DEVNET_ETH>, recipient: address)
    {
        transfer::transfer(treasury_cap, recipient);
    }

    #[test_only]
    public fun test_init(ctx: &mut TxContext)
    {
        init(DEVNET_ETH {}, ctx)
    }
}