import * as snarkjs from "snarkjs"
import { buildPoseidon } from "circomlibjs"

export async function generateProof(address) {
    if(!address) {
        throw new Error("Address is required to generate proof")
    }

    const poseidon = await buildPoseidon();
    const F = poseidon.F;

    const addressBigInt = BigInt(address);
    const saltBigInt = BigInt('0x' + process.env.NEXT_PUBLIC_SALT) % F.p;

    const hashValue = poseidon([addressBigInt, saltBigInt]);
    const hash = F.toString(hashValue);

    const input = {
        address: addressBigInt.toString(),
        salt: saltBigInt.toString(), 
        hash: hash
    }

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "/zk/address-zkp_js/address-zkp.wasm",
        "/zk/address-zkp-final.zkey"
    )

    return { proof, publicSignals }
}