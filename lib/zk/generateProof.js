import * as snarkjs from "snarkjs"
import { buildPoseidon } from "circomlibjs"

export async function generateProof(address) {
    if(!address) {
        throw new Error("Address is required to generate proof")
    }

    const poseidon = await buildPoseidon()
    const hashValue = poseidon([BigInt(address)]);
    const hash = poseidon.F.toString(hashValue);

    const input = {
        address: address,
        hash: hash
    }

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "/zk/address-zkp_js/address-zkp.wasm",
        "/zk/address-zkp-final.zkey"
    )

    return { proof, publicSignals }
}