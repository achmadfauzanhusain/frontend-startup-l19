import { useState } from "react";
import { editProfile } from "@/services/user";
import { toast } from "react-toastify";
import { ChevronRight, ImagePlus } from "lucide-react";
import ConnectWallet from "@/components/connectWallet";

const initialProfile = {
    displayName: "",
    bio: "",
    link1: "",
    link2: "",
    link3: "",
};

function ProfileRow({ label, value, placeholder, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between gap-4 py-3 border-b border-gray-200 text-left hover:bg-blue-50/60 transition-colors rounded-md px-2 -mx-2"
        >
            <span className="text-sm text-gray-500 shrink-0">{label}</span>
            <span
                className={`flex-1 text-right text-sm truncate ${
                    value ? "text-gray-900" : "text-gray-400"
                }`}
            >
                {value || placeholder}
            </span>
            <ChevronRight className="w-4 h-4 text-blue-400 shrink-0" />
        </button>
    );
}

function EditFieldModal({ open, label, value, onSave, onClose, multiline }) {
    const [draft, setDraft] = useState(value);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-gray-900/40 px-4">
            <div className="w-full md:w-96 bg-white rounded-t-2xl md:rounded-2xl p-5 border border-gray-200 shadow-xl">
                <h3 className="text-gray-900 text-sm font-medium mb-3">{label}</h3>
                {multiline ? (
                    <textarea
                        autoFocus
                        rows={4}
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        className="w-full resize-none rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                ) : (
                    <input
                        autoFocus
                        type="text"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        className="w-full rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                )}
                <div className="flex gap-2 mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-lg py-2 text-sm text-gray-600 border border-gray-200 hover:bg-gray-50"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            onSave(draft);
                            onClose();
                        }}
                        className="flex-1 rounded-lg py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

const EditProfile = () => {
    const [profile, setProfile] = useState(initialProfile);
    const [avatar, setAvatar] = useState(null);
    const [editing, setEditing] = useState(null); // key of field being edited, or null
    const [submitting, setSubmitting] = useState(false);

    const fieldMeta = {
        displayName: { label: "Display Name", placeholder: "Add display name" },
        bio: { label: "Bio", placeholder: "Add bio", multiline: true },
        link1: { label: "Link 1", placeholder: "Add link" },
        link2: { label: "Link 2", placeholder: "Add link" },
        link3: { label: "Link 3", placeholder: "Add link" },
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) setAvatar(URL.createObjectURL(file));
    };

    const handleSave = (key, val) => {
        setProfile((prev) => ({ ...prev, [key]: val }));
    };

    const handleEditProfile = async () => {
        setSubmitting(true);
        try {
            const response = await editProfile(profile);
            console.log(response);
            toast.success("Profile updated");
            console.log(response)
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to update profile");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col gap-2 md:flex-row pb-12">
            <div className="w-full md:w-2/3 border-0 md:border-r border-gray-200 px-4 md:px-6 py-6">
                <h1 className="text-gray-900 text-lg font-semibold mb-6 text-center md:text-left">
                    Edit Profile
                </h1>

                {/* Avatar */}
                <div className="flex flex-col items-center gap-3 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-blue-50 border border-blue-100 flex items-center justify-center">
                        {avatar ? (
                            <img
                                src={avatar}
                                alt="profile picture"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <ImagePlus className="w-8 h-8 text-blue-400" />
                        )}
                    </div>
                    <label className="text-sm text-blue-500 font-medium cursor-pointer hover:text-blue-600">
                        Change Pic
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>

                {/* Editable fields */}
                <div className="max-w-md mx-auto md:mx-0 bg-white rounded-xl border border-gray-200 px-4 shadow-sm">
                    <ProfileRow
                        label={fieldMeta.displayName.label}
                        value={profile.displayName}
                        placeholder={fieldMeta.displayName.placeholder}
                        onClick={() => setEditing("displayName")}
                    />
                    <ProfileRow
                        label={fieldMeta.bio.label}
                        value={profile.bio}
                        placeholder={fieldMeta.bio.placeholder}
                        onClick={() => setEditing("bio")}
                    />

                    <div className="mt-2">
                        <p className="text-xs font-medium text-blue-500 pt-2 pb-1">Link</p>
                        <ProfileRow
                            label={fieldMeta.link1.label}
                            value={profile.link1}
                            placeholder={fieldMeta.link1.placeholder}
                            onClick={() => setEditing("link1")}
                        />
                        <ProfileRow
                            label={fieldMeta.link2.label}
                            value={profile.link2}
                            placeholder={fieldMeta.link2.placeholder}
                            onClick={() => setEditing("link2")}
                        />
                        <div className="[&>button]:border-b-0">
                            <ProfileRow
                                label={fieldMeta.link3.label}
                                value={profile.link3}
                                placeholder={fieldMeta.link3.placeholder}
                                onClick={() => setEditing("link3")}
                            />
                        </div>
                    </div>
                </div>

                {/* Save button */}
                <div className="max-w-md mx-auto md:mx-0 mt-4">
                    <button
                        type="button"
                        onClick={handleEditProfile}
                        disabled={submitting}
                        className="w-full rounded-xl py-2.5 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                        {submitting ? "Saving..." : "Save Profile"}
                    </button>
                </div>

                <EditFieldModal
                    open={editing !== null}
                    label={editing ? fieldMeta[editing].label : ""}
                    value={editing ? profile[editing] : ""}
                    multiline={editing ? fieldMeta[editing].multiline : false}
                    onSave={(val) => handleSave(editing, val)}
                    onClose={() => setEditing(null)}
                />
            </div>

            <ConnectWallet />
        </div>
    );
};

export default EditProfile;