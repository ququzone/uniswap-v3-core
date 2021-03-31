import {
    abi as FACTORY_ABI,
    bytecode as FACTORY_BYTECODE,
} from '../artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json';
import Antenna from "iotex-antenna";

const deploy = async () => {
    const antenna = new Antenna(process.env.IOTEX_RPC);
    const acc = antenna.iotx.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);

    const hash = await antenna.iotx.deployContract({
        from: acc.address,
        amount: "0",
        abi: FACTORY_ABI,
        data: Buffer.from(FACTORY_BYTECODE.substring(2), "hex")
    });

    console.log(hash);
};

deploy();
