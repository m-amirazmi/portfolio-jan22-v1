import { useState } from "react";
import { WorkExpI } from "../../utils/interfaces";

export default function WorkExp({ employmentDate, company, role, location, summary, tasks, id }: WorkExpI) {
	const [show, setShow] = useState(false);

	const renderTasks = tasks.map((t) => (
		<li key={t.tid} style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
			<i style={{ marginTop: "6px", color: "var(--primary)", fontSize: "7px" }} className="fas fa-circle"></i>
			<span>
				<span style={{ display: "block" }}>{t.text}</span>
				<span style={{ display: "block", fontStyle: "italic" }}>{t.ex}</span>
			</span>
		</li>
	));

	const renderDetail = () => (
		<div style={{ color: "#777", fontSize: "14px", marginTop: "16px" }}>
			{summary.text1 && <p style={{ marginBottom: "12px" }}>{summary.text1}</p>}
			{summary.text2 && <p style={{ marginBottom: "12px" }}>{summary.text2}</p>}
			{show && <p style={{ fontStyle: "italic", color: "var(--primary)" }}>Tasks</p>}
			{show && <ul style={{ padding: "0px", margin: "0px" }}>{renderTasks}</ul>}
		</div>
	);

	return (
		<div style={{ border: "1px solid #eff3f7", borderRadius: "8px", marginBottom: "40px" }}>
			<div style={{ background: "#eff3f7", color: "var(--primary)", textAlign: "center", padding: "12px 24px", display: "flex", alignItems: "center" }}>
				<p style={{ fontWeight: "600" }}>{company}</p>
				<p style={{ marginLeft: "auto", fontSize: "14px" }}>
					{employmentDate.start} - {employmentDate.end} | {location}
				</p>
			</div>
			<div style={{ padding: "24px" }}>
				<p style={{ display: "flex", gap: "12px", alignItems: "center" }}>
					<i style={{ color: "var(--primary)" }} className="fas fa-angle-double-right"></i>
					<span>{role}</span>
					<button
						style={{
							width: "24px",
							height: "24px",
							background: "#fff",
							borderRadius: "4px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							border: "1px rgba(0, 128, 128, 0.3) solid",
							marginLeft: "auto",
							cursor: "pointer",
						}}
						onClick={() => setShow(!show)}
					>
						<i style={{ marginTop: "2px", color: "var(--primary)" }} className={`fas ${show ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
					</button>
				</p>
				{renderDetail()}
			</div>
		</div>
	);
}
