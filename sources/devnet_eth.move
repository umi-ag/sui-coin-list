module coin_list::devnet_eth {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option;

    struct DEVNET_ETH has drop {}

    fun init(witness: DEVNET_ETH, ctx: &mut TxContext)
    {
        let (treasury_cap, metadata) = coin::create_currency<DEVNET_ETH>(
            witness,
            6,
            b"ETH",
            b"Etherum",
            b"https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            option::none(),
            ctx
        );
        transfer::freeze_object(metadata);
        transfer::share_object(treasury_cap)
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
