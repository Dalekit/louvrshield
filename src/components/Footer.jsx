import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">LouvrShield</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              The next generation of roller shutters — combining louvred blade technology with complete retractability.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Solutions</h4>
            <div className="flex flex-col gap-3">
              <Link to={createPageUrl("HomeOwners")} className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
                Home Owners
              </Link>
              <Link to={createPageUrl("PubsAndClubs")} className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
                Pubs & Clubs
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Get in Touch</h4>
            <Link to={createPageUrl("Contact")} className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
              Find a Retailer
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} LouvrShield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}