import { create } from "zustand";

type NavbarStore = {
  isOpen: boolean;
  id: string;
  setIsOpen: (isOpen: boolean) => void;
  setId: (id: string) => void;
};

type SubNavbarStore = {
  subIsOpen: boolean;
  subId: string;
  setSubIsOpen: (isOpen: boolean) => void;
  setSubId: (id: string) => void;
};


export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false,
  id: "",
  setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen }),
  setId: (id: string) => set({ id: id }),
}));

export const useSubNavbarStore = create<SubNavbarStore>((set) => ({
  subIsOpen: false,
  subId: "",
  setSubIsOpen: (subIsOpen: boolean) => set({ subIsOpen: subIsOpen }),
  setSubId: (subId: string) => set({ subId: subId }),
}));

