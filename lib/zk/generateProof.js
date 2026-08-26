import * as snarkjs from "snarkjs"
import { buildPoseidon } from "circomlibjs"

export async function generateProof(address) {
    if(!address) {
        throw new Error("Secret is required to generate proof")
    }

    const poseidon = await buildPoseidon()
    const hashValue = poseidon([BigInt(address)]);
    const hash = poseidon.F.toString(hashValue);

    const input = {
        address,
        hash
    }

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "/zk/AddressLogin_js/AddressLogin.wasm",
        "/zk/AddressLogin-final.zkey"
    )

    return { proof, publicSignals }
}