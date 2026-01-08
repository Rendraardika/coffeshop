import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "mbahmu_cart_v1";

function formatIDR(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    // product: { id, name, price, img }
    setItems((prev) => {
      const found = prev.find((x) => x.id === product.id);
      if (found) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...product, qty: 1, note: "" }];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((x) => x.id !== id));

  const setQty = (id, qty) => {
    const q = Math.max(1, Number(qty) || 1);
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty: q } : x)));
  };

  const setNote = (id, note) =>
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, note } : x)));

  const clear = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((acc, x) => acc + x.price * x.qty, 0);
    const service = Math.round(subtotal * 0.05); // contoh biaya layanan 5% (boleh 0)
    const total = subtotal + service;
    return { subtotal, service, total, formatIDR };
  }, [items]);

  const value = useMemo(
    () => ({ items, addItem, removeItem, setQty, setNote, clear, totals }),
    [items, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
