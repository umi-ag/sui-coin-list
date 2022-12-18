module coin_list::devnet_usdc {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option;

    struct DEVNET_USDC has drop {}

    fun init(witness: DEVNET_USDC, ctx: &mut TxContext)
    {
        let (treasury_cap, metadata) = coin::create_currency<DEVNET_USDC>(
            witness,
            6,
            b"USDC",
            b"USD coin",
            b"https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
            option::none(),
            ctx
        );
        transfer::freeze_object(metadata);
        transfer::share_object(treasury_cap)
    }

    public entry fun mint(treasury_cap: &mut TreasuryCap<DEVNET_USDC>, amount: u64, ctx: &mut TxContext)
    {
        let coin = coin::mint<DEVNET_USDC>(treasury_cap, amount, ctx);
        transfer::transfer(coin, tx_context::sender(ctx));
    }

    public entry fun transfer(treasury_cap: TreasuryCap<DEVNET_USDC>, recipient: address)
    {
        transfer::transfer(treasury_cap, recipient);
    }

    #[test_only]
    public fun test_init(ctx: &mut TxContext)
    {
        init(DEVNET_USDC {}, ctx)
    }
}
