import React, { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Pesan() {
  const { items, removeItem, setQty, setNote, clear, totals } = useCart();
  const [name, setName] = useState("");
  const [tableNo, setTableNo] = useState("");
  const [payment, setPayment] = useState("Cash");

  const summary = useMemo(() => {
    const lines = items.map((x, i) => {
      const noteText = x.note?.trim() ? ` (catatan: ${x.note.trim()})` : "";
      return `${i + 1}. ${x.name} x${x.qty}${noteText} = Rp ${totals.formatIDR(
        x.price * x.qty
      )}`;
    });

    const header = `Pesanan Warung Kopi Mbah Mu`;
    const customer = `Nama: ${name || "-"} | Meja: ${tableNo || "-"}`;
    const pay = `Pembayaran: ${payment}`;

    const bill = [
      `Subtotal: Rp ${totals.formatIDR(totals.subtotal)}`,
      `Layanan (5%): Rp ${totals.formatIDR(totals.service)}`,
      `Total: Rp ${totals.formatIDR(totals.total)}`,
    ].join("\n");

    return [header, customer, pay, "", ...lines, "", bill].join("\n");
  }, [items, name, tableNo, payment, totals]);

  const onCheckout = () => {
    if (items.length === 0) return;

    // opsi: copy ke clipboard (buat demo)
    navigator.clipboard?.writeText(summary);

    // opsi: kirim ke WhatsApp (kalau kamu mau real)
    // const phone = "6281234567890";
    // window.open(`https://wa.me/${phone}?text=${encodeURIComponent(summary)}`, "_blank");

    alert("Ringkasan pesanan sudah disalin (clipboard). Kamu bisa tempel ke WA / kasir.");
  };

  return (
    <>
      <section className="pageHero">
        <div className="container">
          <span className="pageBadge">Pesan</span>
          <h1 className="pageTitle">Checkout Pesanan</h1>
          <p className="pageDesc">Cek pesananmu, atur jumlah, dan konfirmasi.</p>
        </div>
      </section>

      <section className="container section">
        <div className="checkoutLayout">
          {/* Left: Cart */}
          <div className="checkoutCard">
            <div className="checkoutHead">
              <h2 className="checkoutTitle">Keranjang</h2>
              <button className="btn btnGhost btnSmall" onClick={clear} type="button">
                Kosongkan
              </button>
            </div>

            {items.length === 0 ? (
              <div className="emptyBox">
                Keranjang masih kosong. Balik ke Menu dan klik “Pesan”.
              </div>
            ) : (
              <div className="cartList">
                {items.map((x) => (
                  <div className="cartItem" key={x.id}>
                    <img className="cartImg" src={x.img} alt={x.name} />
                    <div className="cartInfo">
                      <div className="cartName">{x.name}</div>
                      <div className="cartPrice">Rp {totals.formatIDR(x.price)}</div>

                      <div className="cartControls">
                        <label className="cartLabel">
                          Qty
                          <input
                            className="cartQty"
                            type="number"
                            min={1}
                            value={x.qty}
                            onChange={(e) => setQty(x.id, e.target.value)}
                          />
                        </label>

                        <button
                          className="btn btnGhost btnSmall"
                          type="button"
                          onClick={() => removeItem(x.id)}
                        >
                          Hapus
                        </button>
                      </div>

                      <input
                        className="cartNote"
                        placeholder="Catatan (contoh: less sugar / no sugar)"
                        value={x.note}
                        onChange={(e) => setNote(x.id, e.target.value)}
                      />
                    </div>

                    <div className="cartLineTotal">
                      Rp {totals.formatIDR(x.price * x.qty)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <aside className="checkoutSide">
            <div className="checkoutCard">
              <h2 className="checkoutTitle">Detail Pemesan</h2>

              <div className="formGrid">
                <label className="formField">
                  Nama
                  <input value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label className="formField">
                  Nomor Meja
                  <input value={tableNo} onChange={(e) => setTableNo(e.target.value)} />
                </label>

                <label className="formField">
                  Pembayaran
                  <select value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option>Cash</option>
                    <option>QRIS</option>
                    <option>Transfer</option>
                  </select>
                </label>
              </div>

              <div className="billBox">
                <div className="billRow">
                  <span>Subtotal</span>
                  <span>Rp {totals.formatIDR(totals.subtotal)}</span>
                </div>
                <div className="billRow">
                  <span>Layanan (5%)</span>
                  <span>Rp {totals.formatIDR(totals.service)}</span>
                </div>
                <div className="billRow billTotal">
                  <span>Total</span>
                  <span>Rp {totals.formatIDR(totals.total)}</span>
                </div>
              </div>

              <button
                className="btn btnPrimary btnFull"
                type="button"
                onClick={onCheckout}
                disabled={items.length === 0}
              >
                Konfirmasi Pesanan
              </button>

              <div className="hintText">
                *Untuk demo: ringkasan otomatis disalin ke clipboard.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
