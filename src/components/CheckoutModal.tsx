import { useState, useRef } from "react";
import { X, CreditCard, QrCode, Upload, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

const CheckoutModal = ({ open, onClose, planName, price }: CheckoutModalProps) => {
  const [tab, setTab] = useState<"razorpay" | "upi">("razorpay");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFileName(e.target.files[0].name);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative glass glow-md w-full max-w-md p-6 md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="font-heading text-2xl uppercase tracking-wide mb-1">{planName}</h3>
            <p className="text-3xl font-heading font-bold mb-6">{price}</p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setTab("razorpay")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tab === "razorpay"
                    ? "bg-foreground text-background"
                    : "glass glass-hover text-muted-foreground"
                }`}
              >
                <CreditCard size={16} className="inline mr-2" />
                Instant
              </button>
              <button
                onClick={() => setTab("upi")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  tab === "upi"
                    ? "bg-foreground text-background"
                    : "glass glass-hover text-muted-foreground"
                }`}
              >
                <QrCode size={16} className="inline mr-2" />
                UPI
              </button>
            </div>

            {/* Tab Content */}
            {tab === "razorpay" ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Secure checkout via Razorpay. Cards, NetBanking & UPI supported.
                </p>
                <button className="w-full bg-foreground text-background py-3.5 rounded-xl font-semibold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
                  Pay via Card / NetBanking
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* QR placeholder */}
                <div className="glass aspect-square max-w-[180px] mx-auto flex items-center justify-center">
                  <QrCode size={80} className="text-muted-foreground/40" />
                </div>

                <div className="glass rounded-xl px-4 py-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">UPI ID</p>
                  <p className="text-foreground font-mono text-sm select-all">coach@okaxis</p>
                </div>

                {/* Upload */}
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full glass glass-hover rounded-xl py-4 flex flex-col items-center gap-2 cursor-pointer group"
                >
                  {fileName ? (
                    <>
                      <Check size={20} className="text-foreground" />
                      <span className="text-sm text-foreground">{fileName}</span>
                    </>
                  ) : (
                    <>
                      <Upload size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        Upload Payment Screenshot
                      </span>
                    </>
                  )}
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="hidden"
                />

                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I've made a UPI payment for the ${planName} plan (${price}). Attaching screenshot.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-foreground text-background py-3.5 rounded-xl font-semibold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  Confirm Order via WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
