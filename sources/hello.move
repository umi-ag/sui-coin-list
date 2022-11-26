
module coin_list::coin_list {
    // use std::option;
    // use sui::coin::{Self, TreasuryCap};
    // use sui::transfer;
    // use sui::tx_context::{Self, TxContext};

    // /// The type identifier of coin. The coin will have a type
    // /// tag of kind: `Coin<package_object::mycoin::MYCOIN>`
    // /// Make sure that the name of the type matches the module's name.
    // struct BTC has drop {}
    // struct ETH has drop {}

    // // fun init_BTC_devnet(witness: BTC, ctx: &mut TxContext)
    // // {
    // //     // let (treasury, metadata) = coin::create_currency(
    // //     //     BTC {},
    // //     //     8,
    // //     //     b"BTC",
    // //     //     b"Bitcoin",
    // //     //     b"description",
    // //     //     b"https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
    // //     //     ctx
    // //     // );
    // //     // transfer::freeze_object(metadata);
    // //     // transfer::transfer(treasury, tx_context::sender(ctx))
    // // }
    // /// Name of the coin
    // struct TRUSTED_COIN has drop {}

    // /// Register the trusted currency to acquire its `TreasuryCap`. Because
    // /// this is a module initializer, it ensures the currency only gets
    // /// registered once.
    // fun init(witness: TRUSTED_COIN, ctx: &mut TxContext) {
    //     // Get a treasury cap for the coin and give it to the transaction
    //     // sender
    //     let treasury_cap = coin::create_currency<TRUSTED_COIN>(witness, 2, ctx);
    //     transfer::transfer(treasury_cap, tx_context::sender(ctx))
    // }

    // public entry fun mint(treasury_cap: &mut TreasuryCap<TRUSTED_COIN>, amount: u64, ctx: &mut TxContext) {
    //     let coin = coin::mint<TRUSTED_COIN>(treasury_cap, amount, ctx);
    //     transfer::transfer(coin, tx_context::sender(ctx));
    // }

    // public entry fun transfer(treasury_cap: TreasuryCap<TRUSTED_COIN>, recipient: address) {
    //     transfer::transfer(treasury_cap, recipient);
    // }

    // #[test_only]
    // /// Wrapper of module initializer for testing
    // public fun test_init(ctx: &mut TxContext) {
    //     init(TRUSTED_COIN {}, ctx)
    // }

    // // fun init(witness: BTC, ctx: &mut TxContext) {
    // //     let treasury_cap = coin::create_currency(witness, 2, ctx);
    // //     transfer::transfer(treasury_cap, tx_context::sender(ctx))
    // // }

    // // public entry fun init_devnet_ETH(ctx: &mut TxContext)
    // // {
    // //     let treasury = coin::create_currency(
    // //         ETH {},
    // //         8,
    // //         ctx
    // //     );
    // //     transfer::transfer(treasury, tx_context::sender(ctx))
    // // }

    // // public entry fun mint_BTC(
    // //     treasury_cap: &mut TreasuryCap<BTC>,
    // //     amount: u64,
    // //     ctx: &mut TxContext,
    // // )
    // // {
    // //     let coin = coin::mint<BTC>(treasury_cap, amount, ctx);
    // //     transfer::transfer(coin, tx_context::sender(ctx));
    // // }

    // // public entry fun mint_to_wallet<X>(
    // //     treasury_cap: &mut TreasuryCap<X>,
    // //     amount: u64,
    // //     ctx: &mut TxContext,
    // // )
    // // {
    // //     let coin = coin::mint<X>(treasury_cap, amount, ctx);
    // //     transfer::transfer(coin, tx_context::sender(ctx));
    // // }
}
