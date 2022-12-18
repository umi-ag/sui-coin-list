module coin_list::devnet_usdt {
    use sui::coin::{Self, TreasuryCap};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use std::option;


    struct DEVNET_USDT has drop {}

    fun init(witness: DEVNET_USDT, ctx: &mut TxContext)
    {
        let (treasury_cap, metadata) = coin::create_currency<DEVNET_USDT>(
            witness,
            8,
            b"USDT",
            b"Tether",
            b"https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
            option::none(),
            ctx
        );
        transfer::freeze_object(metadata);
        transfer::share_object(treasury_cap)
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
