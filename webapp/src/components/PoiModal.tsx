import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import AlertIcon from "@spectrum-icons/workflow/Alert";
import CompanyCard from "./CompanyCard";

/***************************************************************************************
 *    Title: Adobe Modal for React Aria 1.0.0-rc.0
 *    Author: Adobe
 *    Date: 12/02/23
 *    Availability: https://react-spectrum.adobe.com/react-aria/Modal.html
 ***************************************************************************************/

function PoiModal() {
  return (
    <div className="flex justify-center rounded-lg bg-gradient-to-r ">
      <DialogTrigger>
        <Button className="m-0 border-0 border-transparent bg-transparent p-0 text-right text-sm font-bold uppercase  text-slate-400">
          + add a location
        </Button>
        <ModalOverlay
          className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 flex min-h-full items-center justify-center overflow-y-auto bg-black/25 p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
        >
          <Modal
            className={({ isEntering, isExiting }) => `
            w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 duration-300 ease-out" : ""}
            ${isExiting ? "animate-out zoom-out-95 duration-200 ease-in" : ""}
          `}
          >
            <Dialog role="alertdialog" className="relative outline-none">
              {({ close }) => (
                <>
                  <Heading
                    slot="title"
                    className="text-xxl my-0 font-semibold leading-6 text-slate-700"
                  >
                    Delete folder
                  </Heading>
                  <div className="absolute right-0 top-0 h-6 w-6 stroke-2 text-red-500">
                    <AlertIcon size="M" />
                  </div>
                  <p className="mt-3 text-slate-500">
                    Are you sure you want to delete "Documents"? All contents
                    will be permanently destroyed.
                  </p>
                  <CompanyCard />
                  <div className="mt-6 flex justify-end gap-2">
                    <DialogButton
                      className="pressed:bg-slate-300 bg-slate-200 text-slate-800 hover:border-slate-300"
                      onPress={close}
                    >
                      Cancel
                    </DialogButton>
                    <DialogButton
                      className="pressed:bg-red-600 bg-red-500 text-white hover:border-red-600"
                      onPress={close}
                    >
                      Delete
                    </DialogButton>
                  </div>
                </>
              )}
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </div>
  );
}

function DialogButton({ className, ...props }) {
  return (
    <Button
      {...props}
      className={`inline-flex cursor-default justify-center rounded-md border border-solid border-transparent px-5 py-2 font-[inherit] text-base font-semibold outline-none ring-blue-500 ring-offset-2 transition-colors focus-visible:ring-2 ${className}`}
    />
  );
}

export default PoiModal;
